#!/usr/bin/env bash

if [[ -z $(git status -s) ]]
then
  echo "바뀐 작업내역이 없습니다."
else
  echo "커밋 메시지를 입력하세요."
  read -r "COMMIT_MSG_FILE"
  yarn lint --fix

  git add .
  git commit -m "$COMMIT_MSG_FILE"
  echo "커밋 완료"

  exit
fi

exit
