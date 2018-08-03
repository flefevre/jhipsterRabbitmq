[fl218080@is233628 j5]$ yo jhipster-spring-cloud-stream

               ████    ████        
               ████    ████        
               ████    ████        
               ████    ████        
               ████████████████████
               ████████████████████
               ████████████    ████
               ████████████    ████
               ████████████████████
               ████████████████████

Welcome to the JHipster spring-cloud-stream generator! v0.0.2

? Which *type* of message broker would you like to add? RabbitMQ message broker (recommended for simple projects)
? Please choose the name of the message class use by rabbit message

message broker type = RabbitMQ

message broker type = message
------

Not implemented yet

message broker type = RabbitMQ

message broker type = message
------

Update Property spring.cloud.stream.default.contentType in file src/main/resources/config/application-dev.yml not implemented yet
 Skip !
Update Property spring.cloud.stream.bindings.input.destination in file src/main/resources/config/application-dev.yml not implemented yet
 Skip !
Update Property spring.cloud.stream.bindings.output.destination in file src/main/resources/config/application-dev.yml not implemented yet
 Skip !
Update Property spring.cloud.stream.bindings.rabbit.bindings.output.producer.routingKeyExpression in file src/main/resources/config/application-dev.yml not implemented yet
 Skip !
Update Property spring.cloud.stream.default.contentType in file src/main/resources/config/application-prod.yml not implemented yet
 Skip !
Update Property spring.cloud.stream.bindings.input.destination in file src/main/resources/config/application-prod.yml not implemented yet
 Skip !
Update Property spring.cloud.stream.bindings.output.destination in file src/main/resources/config/application-prod.yml not implemented yet
 Skip !
Update Property spring.cloud.stream.bindings.rabbit.bindings.output.producer.routingKeyExpression in file src/main/resources/config/application-prod.yml not implemented yet
 Skip !
 conflict pom.xml
? Overwrite pom.xml? overwrite
    force pom.xml
   create src/main/docker/rabbitmq.yml
   create src/main/java/com/mycompany/myapp/domain/JhiMessage.java
   create src/main/java/com/mycompany/myapp/service/stream/MessageSink.java
   create src/main/java/com/mycompany/myapp/web/rest/MessageResource.java
   create src/main/java/com/mycompany/myapp/config/CloudMessagingConfiguration.java
 conflict src/main/resources/config/application-dev.yml
? Overwrite src/main/resources/config/application-dev.yml? overwrite
    force src/main/resources/config/application-dev.yml
 conflict src/main/resources/config/application-prod.yml
? Overwrite src/main/resources/config/application-prod.yml? overwrite
    force src/main/resources/config/application-prod.yml
End of spring-cloud-stream generator
[fl218080@is233628 j5]$ pwd
/volatile/home/fl218080/github/jhipsterRabbitmq/j5
[fl218080@is233628 j5]$ ./mvnw
[INFO] Scanning for projects...
[INFO] 
[INFO] ------------------< com.mycompany.myapp:j-5-rabbitmq >------------------
[INFO] Building J 5 Rabbitmq 0.0.1-SNAPSHOT
[INFO] --------------------------------[ war ]---------------------------------
[INFO] 
[INFO] >>> spring-boot-maven-plugin:2.0.3.RELEASE:run (default-cli) > test-compile @ j-5-rabbitmq >>>
[WARNING] The POM for org.apache.logging.log4j:log4j-to-slf4j:jar:2.10.0 is invalid, transitive dependencies (if any) will not be available, enable debug logging for more details
[WARNING] The POM for org.ow2.asm:asm:jar:5.0.4 is invalid, transitive dependencies (if any) will not be available, enable debug logging for more details
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-starter-stream-rabbit/2.0.0.RELEASE/spring-cloud-starter-stream-rabbit-2.0.0.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-starter-stream-rabbit/2.0.0.RELEASE/spring-cloud-starter-stream-rabbit-2.0.0.RELEASE.pom (993 B at 3.0 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit-parent/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-parent-2.0.0.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit-parent/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-parent-2.0.0.RELEASE.pom (5.9 kB at 366 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-2.0.0.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-2.0.0.RELEASE.pom (3.1 kB at 220 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit-core/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-core-2.0.0.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit-core/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-core-2.0.0.RELEASE.pom (1.3 kB at 90 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-amqp/2.0.3.RELEASE/spring-boot-starter-amqp-2.0.3.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-amqp/2.0.3.RELEASE/spring-boot-starter-amqp-2.0.3.RELEASE.pom (2.7 kB at 192 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-rabbit/2.0.4.RELEASE/spring-rabbit-2.0.4.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-rabbit/2.0.4.RELEASE/spring-rabbit-2.0.4.RELEASE.pom (4.5 kB at 324 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-amqp/2.0.4.RELEASE/spring-amqp-2.0.4.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-amqp/2.0.4.RELEASE/spring-amqp-2.0.4.RELEASE.pom (3.5 kB at 269 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/rabbitmq/amqp-client/5.1.2/amqp-client-5.1.2.pom
Downloaded from central: https://repo.maven.apache.org/maven2/com/rabbitmq/amqp-client/5.1.2/amqp-client-5.1.2.pom (33 kB at 1.4 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/integration/spring-integration-amqp/5.0.6.RELEASE/spring-integration-amqp-5.0.6.RELEASE.pom
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/integration/spring-integration-amqp/5.0.6.RELEASE/spring-integration-amqp-5.0.6.RELEASE.pom (3.1 kB at 236 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-starter-stream-rabbit/2.0.0.RELEASE/spring-cloud-starter-stream-rabbit-2.0.0.RELEASE.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit-core/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-core-2.0.0.RELEASE.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-2.0.0.RELEASE.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-amqp/2.0.3.RELEASE/spring-boot-starter-amqp-2.0.3.RELEASE.jar
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-rabbit/2.0.4.RELEASE/spring-rabbit-2.0.4.RELEASE.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-starter-stream-rabbit/2.0.0.RELEASE/spring-cloud-starter-stream-rabbit-2.0.0.RELEASE.jar (2.3 kB at 190 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-amqp/2.0.4.RELEASE/spring-amqp-2.0.4.RELEASE.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-amqp/2.0.4.RELEASE/spring-amqp-2.0.4.RELEASE.jar (130 kB at 3.2 MB/s)
Downloading from central: https://repo.maven.apache.org/maven2/com/rabbitmq/amqp-client/5.1.2/amqp-client-5.1.2.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-amqp/2.0.3.RELEASE/spring-boot-starter-amqp-2.0.3.RELEASE.jar (592 B at 8.5 kB/s)
Downloading from central: https://repo.maven.apache.org/maven2/org/springframework/integration/spring-integration-amqp/5.0.6.RELEASE/spring-integration-amqp-5.0.6.RELEASE.jar
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit-core/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-core-2.0.0.RELEASE.jar (31 kB at 331 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/cloud/spring-cloud-stream-binder-rabbit/2.0.0.RELEASE/spring-cloud-stream-binder-rabbit-2.0.0.RELEASE.jar (32 kB at 301 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/integration/spring-integration-amqp/5.0.6.RELEASE/spring-integration-amqp-5.0.6.RELEASE.jar (123 kB at 910 kB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/org/springframework/amqp/spring-rabbit/2.0.4.RELEASE/spring-rabbit-2.0.4.RELEASE.jar (444 kB at 2.4 MB/s)
Downloaded from central: https://repo.maven.apache.org/maven2/com/rabbitmq/amqp-client/5.1.2/amqp-client-5.1.2.jar (527 kB at 2.9 MB/s)
[INFO] 
[INFO] --- maven-resources-plugin:3.1.0:copy-resources (default-resources) @ j-5-rabbitmq ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 3 resources
[INFO] Copying 18 resources
[INFO] 
[INFO] --- maven-resources-plugin:3.1.0:resources (default-resources) @ j-5-rabbitmq ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 3 resources
[INFO] Copying 18 resources
[INFO] 
[INFO] --- maven-enforcer-plugin:3.0.0-M2:enforce (enforce-versions) @ j-5-rabbitmq ---
[INFO] 
[INFO] --- maven-resources-plugin:3.1.0:copy-resources (docker-resources) @ j-5-rabbitmq ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 3 resources
[INFO] 
[INFO] --- jacoco-maven-plugin:0.8.1:prepare-agent (pre-unit-tests) @ j-5-rabbitmq ---
[INFO] argLine set to -javaagent:/volatile/home/fl218080/.m2/repository/org/jacoco/org.jacoco.agent/0.8.1/org.jacoco.agent-0.8.1-runtime.jar=destfile=/volatile/home/fl218080/github/jhipsterRabbitmq/j5/target/test-results/coverage/jacoco/jacoco.exec -Djava.security.egd=file:/dev/./urandom -Xmx256m
[INFO] 
[INFO] --- maven-compiler-plugin:3.7.0:compile (default-compile) @ j-5-rabbitmq ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 87 source files to /volatile/home/fl218080/github/jhipsterRabbitmq/j5/target/classes
[INFO] 
[INFO] --- maven-resources-plugin:3.1.0:testResources (default-testResources) @ j-5-rabbitmq ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] Copying 4 resources
[INFO] 
[INFO] --- maven-compiler-plugin:3.7.0:testCompile (default-testCompile) @ j-5-rabbitmq ---
[INFO] Nothing to compile - all classes are up to date
[INFO] 
[INFO] <<< spring-boot-maven-plugin:2.0.3.RELEASE:run (default-cli) < test-compile @ j-5-rabbitmq <<<
[INFO] 
[INFO] 
[INFO] --- spring-boot-maven-plugin:2.0.3.RELEASE:run (default-cli) @ j-5-rabbitmq ---
[INFO] Attaching agents: []
The Class-Path manifest attribute in /volatile/home/fl218080/.m2/repository/org/liquibase/liquibase-core/3.5.5/liquibase-core-3.5.5.jar referenced one or more files that do not exist: file:/volatile/home/fl218080/.m2/repository/org/liquibase/liquibase-core/3.5.5/lib/snakeyaml-1.13.jar
16:12:07.432 [main] DEBUG org.springframework.boot.devtools.settings.DevToolsSettings - Included patterns for restart : []
16:12:07.434 [main] DEBUG org.springframework.boot.devtools.settings.DevToolsSettings - Excluded patterns for restart : [/spring-boot-actuator/target/classes/, /spring-boot-devtools/target/classes/, /spring-boot/target/classes/, /spring-boot-starter-[\w-]+/, /spring-boot-autoconfigure/target/classes/, /spring-boot-starter/target/classes/]
16:12:07.434 [main] DEBUG org.springframework.boot.devtools.restart.ChangeableUrls - Matching URLs for reloading : [file:/volatile/home/fl218080/github/jhipsterRabbitmq/j5/target/classes/]

        ██╗ ██╗   ██╗ ████████╗ ███████╗   ██████╗ ████████╗ ████████╗ ███████╗
        ██║ ██║   ██║ ╚══██╔══╝ ██╔═══██╗ ██╔════╝ ╚══██╔══╝ ██╔═════╝ ██╔═══██╗
        ██║ ████████║    ██║    ███████╔╝ ╚█████╗     ██║    ██████╗   ███████╔╝
  ██╗   ██║ ██╔═══██║    ██║    ██╔════╝   ╚═══██╗    ██║    ██╔═══╝   ██╔══██║
  ╚██████╔╝ ██║   ██║ ████████╗ ██║       ██████╔╝    ██║    ████████╗ ██║  ╚██╗
   ╚═════╝  ╚═╝   ╚═╝ ╚═══════╝ ╚═╝       ╚═════╝     ╚═╝    ╚═══════╝ ╚═╝   ╚═╝

:: JHipster 🤓  :: Running Spring Boot 2.0.3.RELEASE ::
:: https://www.jhipster.tech ::

2018-08-03 16:12:08.199  INFO 19990 --- [  restartedMain] com.mycompany.myapp.J5RabbitmqApp        : Starting J5RabbitmqApp on is233628 with PID 19990 (/volatile/home/fl218080/github/jhipsterRabbitmq/j5/target/classes started by fl218080 in /volatile/home/fl218080/github/jhipsterRabbitmq/j5)
2018-08-03 16:12:08.199 DEBUG 19990 --- [  restartedMain] com.mycompany.myapp.J5RabbitmqApp        : Running with Spring Boot v2.0.3.RELEASE, Spring v5.0.7.RELEASE
2018-08-03 16:12:08.199  INFO 19990 --- [  restartedMain] com.mycompany.myapp.J5RabbitmqApp        : The following profiles are active: dev,swagger
2018-08-03 16:12:10.256 DEBUG 19990 --- [  restartedMain] c.m.myapp.config.AsyncConfiguration      : Creating Async Task Executor
2018-08-03 16:12:10.756 DEBUG 19990 --- [  restartedMain] c.m.myapp.config.MetricsConfiguration    : Registering JVM gauges
2018-08-03 16:12:10.799 DEBUG 19990 --- [  restartedMain] c.m.myapp.config.MetricsConfiguration    : Monitoring the datasource
2018-08-03 16:12:10.800 DEBUG 19990 --- [  restartedMain] c.m.myapp.config.MetricsConfiguration    : Initializing Metrics JMX reporting
2018-08-03 16:12:11.694 DEBUG 19990 --- [  restartedMain] c.m.myapp.config.LiquibaseConfiguration  : Configuring Liquibase
2018-08-03 16:12:11.855  WARN 19990 --- [itmq-Executor-1] i.g.j.c.liquibase.AsyncSpringLiquibase   : Starting Liquibase asynchronously, your database might not be ready at startup!
2018-08-03 16:12:12.837 DEBUG 19990 --- [itmq-Executor-1] i.g.j.c.liquibase.AsyncSpringLiquibase   : Liquibase has updated your database in 982 ms
2018-08-03 16:12:14.567 DEBUG 19990 --- [  restartedMain] c.mycompany.myapp.config.WebConfigurer   : Registering CORS filter
2018-08-03 16:12:14.666  INFO 19990 --- [  restartedMain] c.mycompany.myapp.config.WebConfigurer   : Web application configuration, using profiles: dev
2018-08-03 16:12:14.667 DEBUG 19990 --- [  restartedMain] c.mycompany.myapp.config.WebConfigurer   : Initializing Metrics registries
2018-08-03 16:12:14.670 DEBUG 19990 --- [  restartedMain] c.mycompany.myapp.config.WebConfigurer   : Registering Metrics Filter
2018-08-03 16:12:14.671 DEBUG 19990 --- [  restartedMain] c.mycompany.myapp.config.WebConfigurer   : Registering Metrics Servlet
2018-08-03 16:12:14.673 DEBUG 19990 --- [  restartedMain] c.mycompany.myapp.config.WebConfigurer   : Initialize H2 console
2018-08-03 16:12:14.675  INFO 19990 --- [  restartedMain] c.mycompany.myapp.config.WebConfigurer   : Web application fully configured
2018-08-03 16:12:16.867 DEBUG 19990 --- [  restartedMain] c.m.myapp.config.DatabaseConfiguration   : Starting H2 database
2018-08-03 16:12:17.421 DEBUG 19990 --- [  restartedMain] i.g.j.c.apidoc.SwaggerAutoConfiguration  : Starting Swagger
2018-08-03 16:12:17.430 DEBUG 19990 --- [  restartedMain] i.g.j.c.apidoc.SwaggerAutoConfiguration  : Started Swagger in 9 ms
2018-08-03 16:12:17.867 DEBUG 19990 --- [  restartedMain] reactor.util.Loggers$LoggerFactory       : Using Slf4j logging framework
2018-08-03 16:12:17.867 DEBUG 19990 --- [  restartedMain] reactor.core.publisher.Hooks             : Enabling stacktrace debugging via onOperatorDebug
2018-08-03 16:12:17.868 DEBUG 19990 --- [  restartedMain] reactor.core.publisher.Hooks             : Hooking onEachOperator: onOperatorDebug
2018-08-03 16:12:19.116  INFO 19990 --- [  restartedMain] com.mycompany.myapp.J5RabbitmqApp        : Started J5RabbitmqApp in 11.669 seconds (JVM running for 12.01)
2018-08-03 16:12:19.131  INFO 19990 --- [  restartedMain] com.mycompany.myapp.J5RabbitmqApp        : 
----------------------------------------------------------
	Application 'j5rabbitmq' is running! Access URLs:
	Local: 		http://localhost:8080
	External: 	http://127.0.0.1:8080
	Profile(s): 	[dev, swagger]
----------------------------------------------------------
2018-08-03 16:12:25.556 DEBUG 19990 --- [  XNIO-2 task-6] c.m.myapp.aop.logging.LoggingAspect      : Enter: com.mycompany.myapp.web.rest.AccountResource.getAccount() with argument[s] = []
2018-08-03 16:12:25.577 DEBUG 19990 --- [  XNIO-2 task-6] c.m.myapp.aop.logging.LoggingAspect      : Enter: com.mycompany.myapp.service.UserService.getUserWithAuthorities() with argument[s] = []
Hibernate: select user0_.id as id1_6_0_, authority2_.name as name1_3_1_, user0_.created_by as created_2_6_0_, user0_.created_date as created_3_6_0_, user0_.last_modified_by as last_mod4_6_0_, user0_.last_modified_date as last_mod5_6_0_, user0_.activated as activate6_6_0_, user0_.activation_key as activati7_6_0_, user0_.email as email8_6_0_, user0_.first_name as first_na9_6_0_, user0_.image_url as image_u10_6_0_, user0_.lang_key as lang_ke11_6_0_, user0_.last_name as last_na12_6_0_, user0_.login as login13_6_0_, user0_.password_hash as passwor14_6_0_, user0_.reset_date as reset_d15_6_0_, user0_.reset_key as reset_k16_6_0_, authoritie1_.user_id as user_id1_7_0__, authoritie1_.authority_name as authorit2_7_0__ from jhi_user user0_ left outer join jhi_user_authority authoritie1_ on user0_.id=authoritie1_.user_id left outer join jhi_authority authority2_ on authoritie1_.authority_name=authority2_.name where user0_.login=?
2018-08-03 16:12:25.663 DEBUG 19990 --- [  XNIO-2 task-6] c.m.myapp.aop.logging.LoggingAspect      : Exit: com.mycompany.myapp.service.UserService.getUserWithAuthorities() with result = Optional[User{login='admin', firstName='Administrator', lastName='Administrator', email='admin@localhost', imageUrl='', activated='true', langKey='en', activationKey='null'}]
2018-08-03 16:12:25.666 DEBUG 19990 --- [  XNIO-2 task-6] c.m.myapp.aop.logging.LoggingAspect      : Exit: com.mycompany.myapp.web.rest.AccountResource.getAccount() with result = UserDTO{login='admin', firstName='Administrator', lastName='Administrator', email='admin@localhost', imageUrl='', activated=true, langKey='en', createdBy=system, createdDate=2018-08-03T13:58:59.401Z, lastModifiedBy='system', lastModifiedDate=null, authorities=[ROLE_USER, ROLE_ADMIN]}

