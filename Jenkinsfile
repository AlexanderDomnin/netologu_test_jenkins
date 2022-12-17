pipeline {
  agent any
  stages {
    stage('build and test') {
      environment {
        // we will be recording test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = '5c98686d-03b2-4968-ac99-dfe3ac88b519'
      }
      tools {nodejs "node18"}

      steps {
        sh 'npm ci'
        sh "npm run test:record:parallel"
      }
    }
  }
}