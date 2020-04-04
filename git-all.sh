#!/bin/bash

#add command
git add --all
#status check
addStatus=$?
if [ "$addStatus" != "0" ]; then
    say "add command failed"
    exit
fi

#commit command
git commit -m "$1"
#status check
addStatus=$?
if [ "$addStatus" != "0" ]; then
    say "commit command failed"
    exit
fi

#push command
git push origin master
#status check
addStatus=$?
if [ "$addStatus" != "0" ]; then
    say "push command failed"
    exit
fi
