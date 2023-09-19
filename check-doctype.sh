#!/bin/bash

if [[ $(head -n 1 index.html) == "<!DOCTYPE html>" ]]; then
  echo "DOCTYPE declaration found on the first line."
  exit 0 # Success
else
  echo "DOCTYPE declaration not found on the first line."
  exit 1 # Failure
fi
