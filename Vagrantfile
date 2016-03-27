Vagrant.configure("2") do |config|
  # feed the monster
  config.vm.provider "virtualbox" do |v|
    v.name = "gifrBox"
    v.memory = 2048
    v.cpus = 2
  end

  # using ubuntu host
  config.vm.box = "ubuntu/trusty64"

  # use rsync to keep host in sync with guest VM
  config.vm.synced_folder ".", "/sync", type: "rsync",
    rsync__exclude: [".git/","node_modules/"]
  # provision with docker and docker-compose
  config.vm.provision :docker
  # when running docker compose always rebuild and run
  config.vm.provision :docker_compose,
    yml: "/sync/docker-compose.yaml",
    rebuild: true,
    run: "always"

  # don't automatically start syncing,
  # we'll kick that off in the startup script
  config.gatling.rsync_on_startup = false

  # forward ports
  config.vm.network :forwarded_port, guest: 80, host: 80 # service
end
