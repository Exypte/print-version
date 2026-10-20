# print-version

GitHub Action that prints its own name and the tag it was used at.

```yaml
steps:
  - uses: Exypte/print-version@v1   # prints "print-version/v1"
```

When run from the repository itself (`uses: ./`), it prints `print-version/local`.
