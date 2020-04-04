#!/bin/bash
#should be there before any command

#how to echo messsages.
echo 'hello world'

#variable declaration and usage
PRICE_PER_APPLE=5
echo $PRICE_PER_APPLE

username_amazon=akumarpk
echo $username_amazon

#using a variable in a string
echo "apple price today is: ${PRICE_PER_APPLE}"
echo "my amazon login id is: $username_amazon"
#question, this seems to be not working. check what to do?


#using variables from script input
echo "\$0" $0
echo "\$1" $1
echo "\$2" $2
echo "\$3" $3
echo "\$4" $4
