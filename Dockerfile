# Use the official Ruby slim image and specify a version
FROM ruby:3.2.2-slim

# Set environment variables
ENV BUNDLE_HOME=/usr/local/bundle \
    BUNDLE_APP_CONFIG=/usr/local/bundle \
    BUNDLE_DISABLE_PLATFORM_WARNINGS=1 \
    BUNDLE_BIN=/usr/local/bundle/bin \
    GEM_HOME=/usr/local/bundle \
    GEM_BIN=/usr/local/bundle/bin \
    PATH=$BUNDLE_BIN:$GEM_BIN:$PATH

# Install build dependencies and clean up in a single step
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      build-essential \
      zlib1g-dev \
      git \
      imagemagick && \
    gem install bundler -v 2.6.7 && \
    # Clean up APT when done
    apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false && \
    rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /src

# Copy the Gemfile and Gemfile.lock into the image
COPY src/Gemfile* ./

# Install gems for the project
RUN bundle config set deployment 'true' && \
    bundle config set without 'development test' && \
    bundle install --jobs 4 --retry 3

# Copy the rest of the application code
COPY src/ ./

# Expose default Jekyll port
EXPOSE 4000

# Default command to run when starting the container
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload", "--incremental", "--force_polling"]
