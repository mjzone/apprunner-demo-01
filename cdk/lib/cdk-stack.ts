import { Duration, Stack, StackProps } from "aws-cdk-lib";
import * as apprunner from "@aws-cdk/aws-apprunner-alpha";
import { Construct } from "constructs";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    new apprunner.Service(this, "Service", {
      source: apprunner.Source.fromGitHub({
        repositoryUrl: "https://github.com/aws-containers/hello-app-runner",
        branch: "main",
        configurationSource: apprunner.ConfigurationSourceType.REPOSITORY,
        connection: apprunner.GitHubConnection.fromConnectionArn("arn:aws:apprunner:us-east-1:885121665536:connection/myGithubConnector/62d6d238275741019fade5ade59e3e0c"),
      }),
    });
  }
}
