FROM mhart/alpine-node:6
WORKDIR /opt/app
ADD . /opt/app
CMD ["/bin/bash"]
