# Helm Update Env

This project tests that helm can trigger deployment rollouts
based on environment changes by applying a "lastEnv" label.

## Run Test

```bash
$ helm upgrade -i helm-update-env -f examples/initial.yaml charts/helm-update-env
# Check logs and see the following
initiated with environment variable ENV_VAR with value value_a
listening on port 3000

$ helm upgrade -i helm-update-env -f examples/update-image-causes-rollout.yaml charts/helm-update-env
# Check new pod created, check logs again
initiated with environment variable ENV_VAR with value value_a
listening on port 3000

$ helm upgrade -i helm-update-env -f examples/initial.yaml charts/helm-update-env
# Check new pod created, check logs again
initiated with environment variable ENV_VAR with value value_b
listening on port 3000
```
