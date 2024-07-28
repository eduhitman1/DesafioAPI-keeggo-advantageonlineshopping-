// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)


// const { cypressConfigResolver } = require('../config/cypress-config-resolver')
// const { removeDirectory } = require('cypress-delete-downloads-folder');
const cucumber = require('cypress-cucumber-preprocessor').default

console.log("Current directory:", __dirname);
console.log("-----")
// oracledb.initOracleClient({ libDir: oraDir })

module.exports = (on, config) => {
    
    // on('task', { removeDirectory })

    on('file:preprocessor', cucumber());

    on('task', {
        sqlQuery: ({ query, dbconfig }) => queryData(query, dbconfig),
        deleteFile(fileName) {
            const fs = require('fs')
            const userName = require('os').userInfo().username
            const absolutePath = downloadPath + fileName
            const fileStats = fs.statSync(absolutePath)
            const fileSize = fileStats.size

            if (fs.existsSync(absolutePath) && fileSize > 0) {
                try {
                    fs.unlinkSync(absolutePath)
                    console.log('File deleted')
                    return null
                } catch (err) {
                    console.log(err)
                }
            }
            console.log('File is not exists')
            return null
        },
        readdirSync({ path }) {
            const fs = require('fs')
            const dirents = fs.readdirSync(path, { withFileTypes: true })
            const filesNames = dirents
                .filter(dirent => dirent.isFile())
                .map(dirent => dirent.name)
            return filesNames
        },
        log(message) {
            console.log(message)
            return null
        },
        processEnv(nameEnv) {
            try {
                console.log(process.env[nameEnv])
                return process.env[nameEnv] || false
            } catch (err) {
                return false
            }
        }
    })

    //Redução da memória utilizada pelo Cypress
    on('before:browser:launch', (browser, launchOptions) => {
		if (browser.name === 'chrome') {
			launchOptions.args.push('--js-flags=--expose-gc')
            launchOptions.args.push('--disable-gpu')
		}

		return launchOptions
	})


    // make sure to return the config object
    // as it might have been modified by the plugin

    const environment = process.env.environment ? process.env.environment.toLowerCase() : undefined
    config.env.tpExecucao = process.env.tpExecucao

    if (environment) {
        config.env.environment = environment
        const configResolver = cypressConfigResolver(environment)
        return { ...config, ...configResolver }
    } else {
        return { ...config }
    }

    
}

const queryData = async(query, dbconfig) => {
    let conn
    try {
        conn = await oracledb.getConnection(dbconfig)
        result = await conn.execute(query)
        await conn.execute('commit')
        return result
    } catch (err) {
        console.log(`Error===>${err}`)
        await conn.execute('rollback')
        return err
    } finally {
        if (conn) {
            try {
                conn.close()
            } catch (err) {
                console(`Error===>${err}`)
            }
        }
    }
}


