#!/bin/bash
# -------------------------------------------------------------
# Authors:
# Gabriela Schirmer Mauricio <gabismauricio@gmail.com>
# -------------------------------------------------------------
#

DATE=""

print_usage() {
  echo "\
sh create-post.sh
-----------------------------------------------------------
-d | --date          Pass date argument with format YYYY-MM-DD
-h | --help          Print usage
-----------------------------------------------------------
"
}

create_index() {
  if [[ -z "$DATE" ]]; then
    DATE=$(date '+%Y-%m-%d')
  fi
  x=$DATE
  IFS=- read -ra STRIPDATE <<< "$x"
  YEAR=${STRIPDATE[0]}
  MONTH=${STRIPDATE[1]}
  DAY=${STRIPDATE[2]}
  echo "Creating files for $DATE"
  mkdir -p -- "$YEAR/$MONTH/$DAY"
  FILE="some file content (:"
  echo $FILE > "$YEAR/index.md"
  echo $FILE > "$YEAR/$MONTH/index.md"
  echo $FILE > "$YEAR/$MONTH/$DAY/index.md"
}

main() {
  while (( "$#" )); do
    case "$1" in
      -d|--date)
        DATE=$2
        shift
        ;;
      -h|--help)
        print_usage
        exit 0
        ;;
      -*|--*=)
        # unsupported flags
        MSG_ONE="ERROR:"
        MSG_TWO="This flag does not exist: $1" >&2
        print_message
        exit 1
        ;;
      *) # preserve positional arguments
        PARAMS="$PARAMS $1"
        shift
        ;;
    esac
  done
  create_index
}

main "$@"