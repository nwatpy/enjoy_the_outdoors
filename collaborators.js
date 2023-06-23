const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.PAT
});

const owner = "nwatpy";
const repo = "enjoy_the_outdoors";

octokit.repos.listCollaborators({ owner, repo })
  .then(response => {
    const collaboratorUsernames = response.data.map(collaborator => collaborator.login);
    const collaboratorList = collaboratorUsernames.join("\n");
    const collaboratorFileContents = `Collaborators:\n\n${collaboratorList}`;
 
    require("fs").writeFileSync("COLLABORATORS", collaboratorFileContents, "utf8");
  })
  .catch(error => {
    console.error(error);
  });