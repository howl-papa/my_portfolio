module.exports = {
  apps: [
    {
      name: 'yongrak-portfolio',
      script: 'npm',
      args: 'run dev',
      cwd: '/home/user/webapp/yongrak-portfolio',
      env: {
        NODE_ENV: 'development',
        PORT: 3000
      },
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_file: './logs/combined.log',
      max_memory_restart: '1G'
    }
  ]
}