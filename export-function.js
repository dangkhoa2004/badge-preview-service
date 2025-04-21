// Lưu ý: sử dụng nó ở trang about:blank và tiến vô F12 [console]
// 1. Dán toàn bộ blob HTML của bạn vào rawHtml:
const rawHtml = `
<a href="https://www.scala-lang.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white"
        alt="Scala Badge">
</a>
<a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Kotlin-0095D5?style=for-the-badge&logo=kotlin&logoColor=white"
        alt="Kotlin Badge">
</a>
<a href="https://swift.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Swift-F05138?style=for-the-badge&logo=swift&logoColor=white"
        alt="Swift Badge">
</a>
<a href="https://developer.apple.com/documentation/objectivec" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Objective-C-438EFF?style=for-the-badge&logo=objective-c&logoColor=white"
        alt="Objective‑C Badge">
</a>
<a href="https://docs.microsoft.com/powershell/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/PowerShell-0078D7?style=for-the-badge&logo=powershell&logoColor=white"
        alt="PowerShell Badge">
</a>
<a href="https://www.gnu.org/software/bash/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white"
        alt="Bash Badge">
</a>
<a href="https://www.microsoft.com/windows/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white"
        alt="Windows Badge">
</a>
<a href="https://www.apple.com/macos/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/macOS-000000?style=for-the-badge&logo=apple&logoColor=white"
        alt="macOS Badge">
</a>
<a href="https://www.android.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white"
        alt="Android Badge">
</a>
<a href="https://www.apple.com/ios/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white" alt="iOS Badge">
</a>
<a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white"
        alt="React Native Badge">
</a>
<a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Xamarin-264BA4?style=for-the-badge&logo=xamarin&logoColor=white"
        alt="Xamarin Badge">
</a>
<a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Electron-47848F?style=for-the-badge&logo=electron&logoColor=white"
        alt="Electron Badge">
</a>
<a href="https://cordova.apache.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Apache_Cordova-EE4337?style=for-the-badge&logo=cordova&logoColor=white"
        alt="Cordova Badge">
</a>
<a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white"
        alt="Ionic Badge">
</a>
<a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white"
        alt="Gatsby Badge">
</a>
<a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Jekyll-CC0000?style=for-the-badge&logo=jekyll&logoColor=white"
        alt="Jekyll Badge">
</a>
<a href="https://gohugo.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Hugo-478778?style=for-the-badge&logo=hugo&logoColor=white" alt="Hugo Badge">
</a>
<a href="https://www.sphinx-doc.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Sphinx-2980B9?style=for-the-badge&logo=sphinx&logoColor=white"
        alt="Sphinx Badge">
</a>
<a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Docusaurus-0F68E2?style=for-the-badge&logo=docusaurus&logoColor=white"
        alt="Docusaurus Badge">
</a>
<a href="https://www.mkdocs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/MkDocs-2D5BE3?style=for-the-badge&logo=mkdocs&logoColor=white"
        alt="MkDocs Badge">
</a>
<a href="https://www.chartjs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Chart.js-F7931E?style=for-the-badge&logo=chart.js&logoColor=white"
        alt="Chart.js Badge">
</a>
<a href="https://d3js.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/D3.js-F9A03C?style=for-the-badge&logo=d3.js&logoColor=white"
        alt="D3.js Badge">
</a>
<a href="https://recharts.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Recharts-31A5E4?style=for-the-badge&logo=recharts&logoColor=white"
        alt="Recharts Badge">
</a>
<a href="https://www.highcharts.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Highcharts-464A51?style=for-the-badge&logo=highcharts&logoColor=white"
        alt="Highcharts Badge">
</a>
<a href="https://www.tableau.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white"
        alt="Tableau Badge">
</a>
<a href="https://powerbi.microsoft.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=microsoft-power-bi&logoColor=white"
        alt="Power BI Badge">
</a>
<a href="https://looker.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Looker-7248B6?style=for-the-badge&logo=looker&logoColor=white"
        alt="Looker Badge">
</a>
<a href="https://www.elastic.co/kibana" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Kibana-005571?style=for-the-badge&logo=kibana&logoColor=white"
        alt="Kibana Badge">
</a>
<a href="https://grafana.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white"
        alt="Grafana Badge">
</a>
<a href="https://prometheus.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white"
        alt="Prometheus Badge">
</a>
<a href="https://www.elastic.co/elasticsearch/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white"
        alt="Elasticsearch Badge">
</a>
<a href="https://www.elastic.co/logstash/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Logstash-005571?style=for-the-badge&logo=logstash&logoColor=white"
        alt="Logstash Badge">
</a>
<a href="https://www.elastic.co/beats/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Beats-005571?style=for-the-badge&logo=elasticbeats&logoColor=white"
        alt="Beats Badge">
</a>
<a href="https://www.selenium.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white"
        alt="Selenium Badge">
</a>
<a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
        alt="Cypress Badge">
</a>
<a href="https://pptr.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Puppeteer-232B3A?style=for-the-badge&logo=puppeteer&logoColor=white"
        alt="Puppeteer Badge">
</a>
<a href="https://playwright.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Playwright-FFD43B?style=for-the-badge&logo=playwright&logoColor=black"
        alt="Playwright Badge">
</a>
<a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest Badge">
</a>
<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white"
        alt="VS Code Badge">
</a>
<a href="https://www.jetbrains.com/idea/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white"
        alt="IntelliJ IDEA Badge">
</a>
<a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/PyCharm-000000?style=for-the-badge&logo=pycharm&logoColor=white"
        alt="PyCharm Badge">
</a>
<a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/WebStorm-000000?style=for-the-badge&logo=webstorm&logoColor=white"
        alt="WebStorm Badge">
</a>
<a href="https://www.jetbrains.com/phpstorm/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/PhpStorm-000000?style=for-the-badge&logo=phpstorm&logoColor=white"
        alt="PhpStorm Badge">
</a>
<a href="https://www.jetbrains.com/ruby/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/RubyMine-000000?style=for-the-badge&logo=rubymine&logoColor=white"
        alt="RubyMine Badge">
</a>
<a href="https://www.apple.com/xcode/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=xcode&logoColor=white"
        alt="Xcode Badge">
</a>
<a href="https://www.eclipse.org/ide/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipseide&logoColor=white"
        alt="Eclipse Badge">
</a>
<a href="https://netbeans.apache.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/NetBeans-009C40?style=for-the-badge&logo=netbeans&logoColor=white"
        alt="NetBeans Badge">
</a>
<a href="https://www.sublimetext.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Sublime%20Text-FF9800?style=for-the-badge&logo=sublimetext&logoColor=white"
        alt="Sublime Text Badge">
</a>
<a href="https://www.vim.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Vim-019733?style=for-the-badge&logo=vim&logoColor=white" alt="Vim Badge">
</a>
<a href="https://www.gnu.org/software/emacs/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Emacs-553C91?style=for-the-badge&logo=emacs&logoColor=white"
        alt="Emacs Badge">
</a>
<a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Jupyter%20Notebook-F37626?style=for-the-badge&logo=jupyter&logoColor=white"
        alt="Jupyter Notebook Badge">
</a>
<a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
        alt="Postman Badge">
</a>
<a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
        alt="GraphQL Badge">
</a>
<a href="https://mqtt.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/MQTT-FF6600?style=for-the-badge&logo=mqtt&logoColor=white" alt="MQTT Badge">
</a>
<a href="https://grpc.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=grpc&logoColor=white" alt="gRPC Badge">
</a>
<a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white"
        alt="NGINX Badge">
</a>
<a href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Apache%20HTTP-CA1F26?style=for-the-badge&logo=apache&logoColor=white"
        alt="Apache HTTP Server Badge">
</a>
<a href="https://kafka.apache.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Apache%20Kafka-231F20?style=for-the-badge&logo=apachekafka&logoColor=white"
        alt="Apache Kafka Badge">
</a>
<a href="https://www.rabbitmq.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/RabbitMQ-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white"
        alt="RabbitMQ Badge">
</a>
<a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"
        alt="Node.js Badge">
</a>
<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"
        alt="React Badge">
</a>
<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white"
        alt="Vue.js Badge">
</a>
<a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white"
        alt="Angular Badge">
</a>
<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
        alt="Next.js Badge">
</a>
<a href="https://nuxt.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Nuxt.js-00C58E?style=for-the-badge&logo=nuxt.js&logoColor=white"
        alt="Nuxt.js Badge">
</a>
<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white"
        alt="Svelte Badge">
</a>
<a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
        alt="Express.js Badge">
</a>
<a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white"
        alt="Django Badge">
</a>
<a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"
        alt="Flask Badge">
</a>
<a href="https://spring.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
        alt="Spring Badge">
</a>
<a href="https://laravel.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white"
        alt="Laravel Badge">
</a>
<a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=rubyonrails&logoColor=white"
        alt="Ruby on Rails Badge">
</a>
<a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
        alt="TensorFlow Badge">
</a>
<a href="https://pytorch.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white"
        alt="PyTorch Badge">
</a>
<a href="https://www.ansible.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white"
        alt="Ansible Badge">
</a>
<a href="https://www.terraform.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white"
        alt="Terraform Badge">
</a>
<a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white"
        alt="Jenkins Badge">
</a>
<a href="https://circleci.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/CircleCI-343434?style=for-the-badge&logo=circleci&logoColor=white"
        alt="CircleCI Badge">
</a>
<a href="https://travis-ci.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Travis_CI-3EAAAF?style=for-the-badge&logo=travis-ci&logoColor=white"
        alt="Travis CI Badge">
</a>
<a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
        alt="JavaScript Badge">
</a>
<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
        alt="Python Badge">
</a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
        alt="TypeScript Badge">
</a>
<a href="https://www.java.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" alt="Java Badge">
</a>
<a href="https://docs.microsoft.com/dotnet/csharp/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white" alt="C# Badge">
</a>
<a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"
        alt="C++ Badge">
</a>
<a href="https://golang.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" alt="Go Badge">
</a>
<a href="https://www.rust-lang.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white" alt="Rust Badge">
</a>
<a href="https://www.ruby-lang.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" alt="Ruby Badge">
</a>
<a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" alt="PHP Badge">
</a>
<a href="https://developer.mozilla.org/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
        alt="HTML5 Badge">
</a>
<a href="https://developer.mozilla.org/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Badge">
</a>
<a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass Badge">
</a>
<a href="https://www.w3.org/standards/techs/sql" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=postgresql&logoColor=white"
        alt="SQL Badge">
</a>
<a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white"
        alt="Markdown Badge">
</a>
<a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white"
        alt="PostgreSQL Badge">
</a>
<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"
        alt="MySQL Badge">
</a>
<a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"
        alt="MongoDB Badge">
</a>
<a href="https://redis.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white"
        alt="Redis Badge">
</a>
<a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white"
        alt="Kubernetes Badge">
</a>
<a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"
        alt="Twitter Badge">
</a>
<a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
        alt="Facebook Badge">
</a>
<a href="https://www.instagram.com/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
        alt="Instagram Badge">
</a>
<a href="https://www.tiktok.com/@your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/TikTok-000000?style=for-the-badge&logo=tiktok&logoColor=white"
        alt="TikTok Badge">
</a>
<a href="https://www.youtube.com/c/your-channel" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"
        alt="YouTube Badge">
</a>
<a href="https://www.linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
        alt="LinkedIn Badge">
</a>
<a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Telegram-0088CC?style=for-the-badge&logo=telegram&logoColor=white"
        alt="Telegram Badge">
</a>
<a href="https://gitlab.com/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white"
        alt="GitLab Badge">
</a>
<a href="https://bitbucket.org/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Bitbucket-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white"
        alt="Bitbucket Badge">
</a>
<a href="https://aws.amazon.com/your-account" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white"
        alt="AWS Badge">
</a>
<a href="https://cloud.google.com/your-project" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"
        alt="Google Cloud Badge">
</a>
<a href="https://azure.microsoft.com/en-us/services/your-service" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white"
        alt="Azure Badge">
</a>
<a href="https://www.heroku.com/your-app" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"
        alt="Heroku Badge">
</a>
<a href="https://www.digitalocean.com/your-account" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/DigitalOcean-0080FF?style=for-the-badge&logo=digitalocean&logoColor=white"
        alt="DigitalOcean Badge">
</a>
<a href="https://www.hackerearth.com/@your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/HackerEarth-323754?style=for-the-badge&logo=hackerearth&logoColor=white"
        alt="HackerEarth Badge">
</a>
<a href="https://www.topcoder.com/members/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/TopCoder-2EA5E2?style=for-the-badge&logo=topcoder&logoColor=white"
        alt="TopCoder Badge">
</a>
<a href="https://www.codechef.com/users/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/CodeChef-5B4638?style=for-the-badge&logo=codechef&logoColor=white"
        alt="CodeChef Badge">
</a>
<a href="https://codeforces.com/profile/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Codeforces-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white"
        alt="Codeforces Badge">
</a>
<a href="https://atcoder.jp/users/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/AtCoder-ED1C24?style=for-the-badge&logo=atcoder&logoColor=white"
        alt="AtCoder Badge">
</a>
<a href="https://projecteuler.net/profile/your-username" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Project_Euler-6A5ACD?style=for-the-badge&logo=project-euler&logoColor=white"
        alt="Project Euler Badge">
</a>
<a href="https://www.hackerrank.com/dangkhoa2004" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/HackerRank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white" alt="HackerRank Badge">
</a>
<a href="https://leetcode.com/dangkhoa2004/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white" alt="LeetCode Badge">
</a>
<a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=about.me&logoColor=white" alt="Portfolio Badge">
</a>
<a href="https://github.com/dangkhoa2004" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Badge">
</a>
<a href="https://stackoverflow.com/users/your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/StackOverflow-FE7A16?style=for-the-badge&logo=stackoverflow&logoColor=white" alt="StackOverflow Badge">
</a>
<a href="https://codepen.io/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/CodePen-000000?style=for-the-badge&logo=codepen&logoColor=white" alt="CodePen Badge">
</a>
<a href="https://www.codewars.com/users/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Codewars-B1361E?style=for-the-badge&logo=codewars&logoColor=white" alt="Codewars Badge">
</a>
<a href="https://replit.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Replit-667881?style=for-the-badge&logo=replit&logoColor=white" alt="Replit Badge">
</a>
<a href="https://www.kaggle.com/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Kaggle-20BEFF?style=for-the-badge&logo=kaggle&logoColor=white" alt="Kaggle Badge">
</a>
<a href="https://www.coursera.org/user/your-profile" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Coursera-0056D2?style=for-the-badge&logo=coursera&logoColor=white" alt="Coursera Badge">
</a>
<a href="https://www.udemy.com/user/your-profile" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Udemy-A435F0?style=for-the-badge&logo=udemy&logoColor=white" alt="Udemy Badge">
</a>
<a href="https://www.behance.net/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Behance-1769ff?style=for-the-badge&logo=behance&logoColor=white" alt="Behance Badge">
</a>
<a href="https://www.fiverr.com/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Fiverr-1DBF73?style=for-the-badge&logo=fiverr&logoColor=white" alt="Fiverr Badge">
</a>

<a href="https://www.upwork.com/freelancers/~your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Upwork-6fda44?style=for-the-badge&logo=upwork&logoColor=white" alt="Upwork Badge">
</a>
<a href="https://hashnode.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white" alt="Hashnode Badge">
</a>
<a href="https://medium.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white" alt="Medium Badge">
</a>
<a href="https://gdsc.community.dev/u/your-username/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/GDSC-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="GDSC Badge">
</a>
<a href="https://huggingface.co/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/HuggingFace-FFD21F?style=for-the-badge&logo=huggingface&logoColor=black" alt="Hugging Face Badge">
</a>
<a href="https://wandb.ai/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Weights_&_Biases-FFBE00?style=for-the-badge&logo=weightsandbiases&logoColor=black" alt="WandB Badge">
</a>
<a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Unity-000000?style=for-the-badge&logo=unity&logoColor=white" alt="Unity Badge">
</a>
<a href="https://www.figma.com/@your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma Badge">
</a>
<a href="https://discord.com/users/your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white" alt="Discord Badge">
</a>
<a href="https://your-workspace.slack.com" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack Badge">
</a>
<a href="https://dribbble.com/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Dribbble-EA4C89?style=for-the-badge&logo=dribbble&logoColor=white" alt="Dribbble Badge">
<a href="https://www.pinterest.com/your-username/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Pinterest-BD081C?style=for-the-badge&logo=pinterest&logoColor=white" alt="Pinterest Badge">
</a>
<a href="https://scholar.google.com/citations?user=your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Google_Scholar-4285F4?style=for-the-badge&logo=googlescholar&logoColor=white" alt="Google Scholar Badge">
</a>
<a href="https://www.researchgate.net/profile/your-name" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/ResearchGate-00CCBB?style=for-the-badge&logo=researchgate&logoColor=white" alt="ResearchGate Badge">
</a>
<a href="https://wellfound.com/u/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Wellfound-000000?style=for-the-badge&logo=angellist&logoColor=white" alt="AngelList Badge">
</a>
<a href="https://www.linkedin.com/learning/me" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/LinkedIn%20Learning-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Learning Badge">
</a>
<a href="https://hub.docker.com/u/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Badge">
</a>
<a href="https://www.notion.so/yourworkspace" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge">
</a>
<a href="https://obsidian.md/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Obsidian-483699?style=for-the-badge&logo=obsidian&logoColor=white" alt="Obsidian Badge">
</a>
<img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions Badge">
<a href="https://app.netlify.com/teams/yourname" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify Badge">
</a>
<a href="https://vercel.com/yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Badge">
</a>
<a href="https://zapier.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Zapier-FF4A00?style=for-the-badge&logo=zapier&logoColor=white" alt="Zapier Badge">
</a>
<a href="https://ifttt.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/IFTTT-000000?style=for-the-badge&logo=ifttt&logoColor=white" alt="IFTTT Badge">
</a>
<a href="https://open.spotify.com/show/yourpodcast" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Spotify_Podcast-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify Podcast Badge">
</a>
<a href="https://anchor.fm/yourshow" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Anchor-5000b9?style=for-the-badge&logo=anchor&logoColor=white" alt="Anchor Badge">
</a>
<a href="https://platform.openai.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Badge">
</a>
<a href="https://runwayml.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/RunwayML-FF0070?style=for-the-badge&logo=runway&logoColor=white" alt="RunwayML Badge">
</a>
<a href="https://gitcoin.co/your-username" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Gitcoin-3466E8?style=for-the-badge&logo=gitcoin&logoColor=white" alt="Gitcoin Badge">
</a>
<a href="https://dappradar.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/DappRadar-0D61FE?style=for-the-badge&logo=dappradar&logoColor=white" alt="DappRadar Badge">
</a>
<a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/W3Schools-04AA6D?style=for-the-badge&logo=w3schools&logoColor=white" alt="W3Schools Badge">
</a>
<a href="https://www.freecodecamp.org/yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/freeCodeCamp-0A0A23?style=for-the-badge&logo=freecodecamp&logoColor=white" alt="freeCodeCamp Badge">
</a>
<a href="https://www.geeksforgeeks.org/user-profile" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/GeeksforGeeks-2F8D46?style=for-the-badge&logo=geeksforgeeks&logoColor=white" alt="GeeksforGeeks Badge">
</a>
<a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=androidstudio&logoColor=white" alt="Android Studio Badge">
</a>
<a href="https://expo.dev/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo Badge">
</a>
<a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter Badge">
</a>
<a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux Badge">
</a>
<a href="https://ubuntu.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white" alt="Ubuntu Badge">
</a>
<a href="https://learn.microsoft.com/en-us/windows/terminal/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Windows_Terminal-4D4D4D?style=for-the-badge&logo=windows&logoColor=white" alt="Windows Terminal Badge">
</a>
<a href="https://trello.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" alt="Trello Badge">
</a>
<a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion Badge">
</a>
<a href="https://clickup.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/ClickUp-7B68EE?style=for-the-badge&logo=clickup&logoColor=white" alt="ClickUp Badge">
</a>
<a href="https://github.com/KoboldAI/KoboldAI-Client" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/KoboldAI-2A2A2A?style=for-the-badge&logo=openai&logoColor=white" alt="KoboldAI Badge">
</a>
<a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Claude.ai-101010?style=for-the-badge&logo=openai&logoColor=white" alt="Claude AI Badge">
</a>
<a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Perplexity-2E2E2E?style=for-the-badge&logo=perplexity&logoColor=white" alt="Perplexity Badge">
</a>
<a href="https://www.reddit.com/user/yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit Badge">
</a>
<a href="https://stackexchange.com/users/your-id" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/StackExchange-1E5397?style=for-the-badge&logo=stackexchange&logoColor=white" alt="StackExchange Badge">
</a>
<a href="https://www.producthunt.com/@yourusername" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Product_Hunt-DA552F?style=for-the-badge&logo=producthunt&logoColor=white" alt="Product Hunt Badge">
</a>
<a href="https://www.twitch.tv/yourchannel" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Twitch-9146FF?style=for-the-badge&logo=twitch&logoColor=white" alt="Twitch Badge">
</a>
<a href="https://obsproject.com/" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/OBS_Studio-302E31?style=for-the-badge&logo=obsstudio&logoColor=white" alt="OBS Studio Badge">
</a>

`;

// 2. Sử dụng vùng chứa tạm thời thay vì DOMParser:
const container = document.createElement("template");
// .template.content cho phép chúng ta truy vấn mà không cần chạm vào DOM có thể nhìn thấy
container.innerHTML = rawHtml;
const imgs = Array.from(container.content.querySelectorAll("img"));

// 3. Xây dựng mảng JSON của bạn chính xác như trước:
const badges = imgs.map((img, i) => {
  const link = img.closest("a");
  const srcHtml = img.src.replace(/&/g, "&amp;");
  const html = link
    ? `<a href="${link.href}" rel="noopener noreferrer" target="_blank">\n<img alt="${img.alt}" src="${srcHtml}"/>\n</a>`
    : `<img alt="${img.alt}" src="${srcHtml}"/>`;

  return {
    id: `badge-${i + 1}`,
    name: img.alt,
    category: "Badges",
    thumbnail: img.src,
    html,
    css: "",
    js: "",
  };
});

// 4. Kích hoạt tải xuống tệp JSON:
const jsonString = JSON.stringify(badges, null, 2);
const blob = new Blob([jsonString], { type: "application/json" });
const url = URL.createObjectURL(blob);

const a = document.createElement("a");
a.href = url;
a.download = "badges.json";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);
