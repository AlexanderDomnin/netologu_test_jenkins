pipeline {
  agent any
  stages {
    stage('build') {
      steps {
              // there a few default environment variables on Jenkins
              // on local Jenkins machine (assuming port 8080) see
              // http://localhost:8080/pipeline-syntax/globals#env
              echo "Running build ${env.BUILD_ID} on ${env.JENKINS_URL}"
              sh 'npm ci'
            }
      }
    stage('cypress parallel tests') {
          environment {
            CYPRESS_RECORD_KEY = credentials('cypress-example-record-key')
            CYPRESS_trashAssetsBeforeRuns = 'false'
          }
          tools {nodejs "node18"}

          parallel {
            stage('tester A') {
              steps {
                echo "Running build ${env.BUILD_ID}"
                sh "npm run test:record:parallel"
              }
            }

            stage('tester B') {
              steps {
                echo "Running build ${env.BUILD_ID}"
                sh "npm run test:record:parallel"
              }
            }
          }

        }
      }
}