# Global-Avicole

git filter-branch --env-filter '
OLD_EMAIL="ibrahimatine29@email.com"
CORRECT_NAME="Ibrahima Tine"
CORRECT_EMAIL="ibrahima1.tine@uadb.edu.sn"

if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags

git config user.name "Ibrahima Tine"
git config user.email "ibrahima1.tine@uadb.edu.sn"
