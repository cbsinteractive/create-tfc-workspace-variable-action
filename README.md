# Create TFC Workspace Variable Action

This action is used to create Terraform Cloud workspace variables.

## Inputs

The action expects the following inputs:

| Variable        | Required | Description                                                                           |
| --------------- | -------- | ------------------------------------------------------------------------------------- |
| `tfcToken`      | Yes      | A Terraform Cloud API token with access to manage the workspace.                      |
| `orgName`       | Yes      | The name of the Terraform Cloud organization in which the workspace resides.          |
| `workspaceName` | Yes      | The name of the Terraform Cloud workspace to manage.                                  |
| `variableName`  | Yes      | The name of the variable.                                                             |
| `category`      | Yes      | The type of variable to create. Options include `terraform` and `env`.                |
| `sensitive`     | No       | Whether the variable should be treated by Terraform as sensitive. Default to `false`. |
| `value`         | No       | The variable's initial value. Defaults to an empty string.                            |

## Outputs

The action generates no outputs.

## Example Usage

```yaml
- name: Set some secret key
    uses: cbsinteractive/create-tfc-workspace-variable-action@v1
    with:
        tfcToken: ${{ secrets.tfc_org_token }}
        orgName: ${{ secrets.tfc_org }}
        workspaceName: some-tfc-workspace-name
        variableName: some_secret_key
        category: terraform
        sensitive: true
        value: ${{ secrets.some_secret_key }}
```

This example assumes variables stored as GitHub [encrypted secrets][].

[encrypted secrets]: https://docs.github.com/en/actions/reference/encrypted-secrets
