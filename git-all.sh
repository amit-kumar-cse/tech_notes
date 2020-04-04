#!/bin/bash

#add command
git add --all
#status check
addStatus=$?
if $addStatus!=0; then
    say "add command failed"
    exit
fi


git commit -m "$1"
addStatus=$?
if $addStatus!=0; then
    say "commit command failed"
    exit
fi

git push origin master
addStatus=$?
if $addStatus!=0; then
    say "push command failed"
    exit
fi
