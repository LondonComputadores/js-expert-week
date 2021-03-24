
# What am I building?
- A Console Chat App with Blessed package and also Design Pattern with Fluent Interface and Builder

# How it's being built.

Console commnads and extra configs:

- node -v  # Output: v12...
- Here I decided to install node v15 using nvm. See instructions below!
- nvm use 15
- node -v  # Output: v15...
- npm install npm -y
- npm init -y


# nvm instalation instructions:

- see the link in the References section below!
- open another terminal tab or window
- cd ~/ from anywhere then git clone https://github.com/nvm-sh/nvm.git .nvm
- cd ~/.nvm and check out the latest version with git checkout v0.37.2
- add these lines to your ~/.bashrc, ~/.profile, or ~/.zshrc:
    
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion


# References:

- https://www.youtube.com/watch?v=Gvamncn_wG0&list=PLqFwRPueWb5cuveOIfUQwb6vNsqC9pWHI

- https://github.com/nvm-sh/nvm#git-install