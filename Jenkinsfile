pipeline {
  agent any
  tools {nodejs "node18"}
  parameters {
        choice(name: 'SPEC_1', choices: ["cypress/e2e/admin_spec/*", "cypress/e2e/main_spec/*"], description: "choice value parallel 1" )
        choice(name: 'SPEC_2', choices: ["cypress/e2e/main_spec/*","cypress/e2e/admin_spec/*"], description: "choice value parallel 2" )
        choice(name: 'BROWSER_1', choices: ['chrome', 'firefox','edge'], description: "choice value browser 1" )
        choice(name: 'BROWSER_2', choices: ['firefox','chrome','edge'], description: "choice value browser 2" )
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
                sh "npm run test:record:${BROWSER_1}:parallel --spec ${SPEC_1} --ci-build-id $CI_BUILD_ID"
              }
            }

            stage('tester B') {
              steps {
                echo "Running build ${env.BUILD_ID}"
                sh "npm run test:record:${BROWSER_2}:parallel --spec ${SPEC_2} --ci-build-id $CI_BUILD_ID"
              }
            }
          }

        }
      }
}