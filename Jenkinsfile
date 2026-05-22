pipeline {
    agent any

    tools {
        nodejs "node"
    }

    parameters {
        string(name: 'container_name', defaultValue: "test_web", description: 'Nombre del contenedor de docker')
        string(name: 'image_name', defaultValue: 'test_img', description: 'Nombre de la imagen de docker')
        string(name: 'tag_image', defaultValue: 'test_lts', description: 'Nombre de la imagen de docker')
        string(name: 'container_port', defaultValue: '80', description: 'Puerto en uso del contenedor')
    }

    stages {
        stage('install') {
            steps {
                git branch: 'gh-pages', url: 'https://github.com/SirDavalos/Proyecto_Angular_AlmacenPerfumes_LCDT.git'
                dir{'ruta a mover'} {
                    sh 'npm install'
                }
            }
        }

        stage('testing') {
            steps {
                dir('ruta a mover') {
                    sh 'npm run test'
                }
            }
        }
    }
}