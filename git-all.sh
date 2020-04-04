#!/bin/bash

#add command
git add --all
#status check
addStatus $?
if addStatus!=0; then
    say "add command failed"
    exit
else
    say "add command passed"
fi


git commit -m "$1"
if(git push origin master)

#improvements to do. if any of these commands fail. show an error message and say "checkin failed"
