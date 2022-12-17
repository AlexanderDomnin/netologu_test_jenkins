pipeline {
  agent any
  tools {nodejs "node18"}
  parameters {
        choise(name: 'SPEC_1', choices: ["cypress/e2e/admin_spec/*", "cypress/e2e/main_spec/*"], descriptions: "choice value parallel 1" )
        choise(name: 'SPEC_2', choices: ["cypress/e2e/main_spec/*","cypress/e2e/admin_spec/*"], descriptions: "choice value parallel 2" )
        choise(name: 'BROWSER_1', choices: ['chrome', 'firefox','edge'], descriptions: "choice value browser 1" )
        choise(name: 'BROWSER_2', choices: ['firefox','chrome','edge'], descriptions: "choice value browser 2" )
  }
  stages {
    stage('build') {
      steps {
              echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
              sh 'npm ci'
            }
      }
    stage('cypress parallel tests') {
          environment {
            CYPRESS_RECORD_KEY = credentials('cypress-example-record-key')
            CYPRESS_trashAssetsBeforeRuns = 'false'
          }

          parallel {
            stage('tester A') {
              steps {
                echo "Running build ${env.BUILD_ID}"
                sh "npm run test:record:${BROWSER_1}:parallel --spec ${SPEC_1}"
              }
            }

            stage('tester B') {
              steps {
                echo "Running build ${env.BUILD_ID}"
                sh "npm run test:record:${BROWSER_2}:parallel --spec ${SPEC_2}"
              }
            }
          }

        }
      }
}