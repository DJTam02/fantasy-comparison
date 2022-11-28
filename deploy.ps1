# Check args
if ($args.count -lt 1) {
    write-host "Please enter a commit message"
    exit
}

# Build
npm run build

# Add
git add dist

# Commit
git commit -m $args[0]

# Push
git push

# Update subtree
git subtree push --prefix=dist origin gh-pages