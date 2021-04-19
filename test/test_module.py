from context import Project, ProjectFiles

project = Project("t", ProjectFiles(
    {
        "hello" : "frfefe"
    },
    ["data"]
)).create()