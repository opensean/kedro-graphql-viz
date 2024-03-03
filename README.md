# Welcome to your Bit Workspace
  
This is an empty workspace to author your [Vue](https://vuejs.org/) components.

You can create a new component by running:

- `bit create vue <your-component-name>` or
- `bit create vue-composable <your-composable-name>`.

You can create a Vue app by running:

- `bit create vue-app <your-app-name>`.

In this workspace, you already have a custom development environment for your components, which is "envs/my-vue-env". However, you can still create another one if you want by running:

- `bit create vue-env <your-env-name>`.

## What's included

- **workspace.jsonc**

This is the main configuration file of your bit workspace. Here you can modify the workspace name and icon as well as default directory and scope. It is where dependencies are found when you install anything. It is also where you register aspects, bit extensions as well as apply the environments for your components. This workspace has been setup so that all components use the Vue env. However you can create other components and apply other envs to them such as node, html, react, angular and aspect envs.

- **.bitmap**

This is an auto-generated file and includes the mapping of your components. There is one component included here. In order to remove this component you can run the following command.

- **.gitignore**

Ignoring any files from version control
