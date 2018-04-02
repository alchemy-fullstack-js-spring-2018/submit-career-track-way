Submit the Career Track Way
===

Submit an assignment the Career Track way!

## Basic steps for all assignments

1. Fork this repository _to your own github account_
1. Clone your forked repo locally (`git clone ...`)
1. Start a branch (`git checkout -b dev`)
1. Essentials
    * `.eslintrc` 
    * `.gitignore`
    * `.travis.yml`
    * `package.json`
    
    ```sh
    > npm init
    ```
    
    Add `test` and `start` `script`!
    
    * `README.md`
    
        * Project description
        * Contributor
        * Developer
            * How to get started
            * How to use API
    
1. Repeat until done:
    * Do work
      * Write a test
      * (Commit)
      * Make it pass
      * Commit
      * Improve Code
      * Commit
    * Repeat
    * Push to your github fork
    * Repeat
    
1. Submit PR from `<your repo>/<your branch>` to `<class repo>/<branch-with-your-github-username>`
1. Verify that PR passes Travis CI
1. Submit PR Url and (**These are not optional!!!**):
    1. How long did you spend on this assignment?
    2. Describe your process of completing this assignment?
    2. What was the hardest part and the easiest part of this assignment?

### For this assignment

Your modularized, tested math library:

1. Library with tested basic math functions: `add`, `substract`, `multiple`, `divide`
1. Review this `LAB.md` and make sure you have fulfilled each requirement
1. `CHALLENGE`: Throw an error `throw new Error('Attempt to divide by zero (0)')` when attempting to divide by 0
