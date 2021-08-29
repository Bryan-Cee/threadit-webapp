FROM node:14

LABEL "com.github.actions.name"="Auto-merge pull requests"
LABEL "com.github.actions.description"="Merge the pull request after the checks pass"
LABEL "com.github.actions.icon"="activity"
LABEL "com.github.actions.color"="green"

COPY merge_pr.js /
ENTRYPOINT ["node", "/merge_pr.js"]