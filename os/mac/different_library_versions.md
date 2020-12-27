- have a libs folder in your home folder
  - let us say we want to have multiple verison of kubectl
    - in '~/libs/kubectl' have multiple folders carrying different
      version like this.
    - libs/
      - kubectl/
        - 1.41.1
        - 1.15.6
- In your source file

```
PATH=/Users/amit/libs/kubectl/1.14.1:$PATH
export PATH;
```

- finally
  - source ~/.profile
