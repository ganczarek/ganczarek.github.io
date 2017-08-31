
desc "Clones from remote master to _site"
task :prepare do
    rm_rf Dir['_site']
    puts "Clone master into _site"
    %x{git clone -b master --depth 1 git@github.com:ganczarek/ganczarek.github.io.git _site}
end

desc "Builds the site"
task :build => :clean do
    jekyll 'build'
end

desc "Pushes to GitHub"
task :push_to_github => [:prepare, :build] do
    if ! git_no_local_changes then
        abort "There are uncommitted changes in current branch"
    end
    if git_remote_diffs('master') then
        abort "Local master is not in sync with remote"
    end
    commit = %x{git rev-parse HEAD}
    Dir.chdir('_site') do
      print %x{git add -A}
      print %x{git add -A && git commit -m "Updated to #{commit}"}
      print %x{git push origin master}
    end
end

task :deploy => [:prepare, :build, :push_to_github]

desc "Serve Jekyll site locally and watch for changes"
task :preview => :clean do
    jekyll 'serve --watch'
end
task :serve => :preview

task :clean do
    rm_rf Dir['_site/*']
end

def jekyll(directives = '')
  sh 'jekyll ' + directives
end

def git_remote_diffs branch
  %x{git fetch}
  %x{git rev-parse #{branch}} != %x{git rev-parse origin/#{branch}}
end

# false, if returned non-0 exit code
def git_no_local_changes
  system "git diff-index --quiet HEAD --"
end