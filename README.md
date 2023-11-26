# Hosting Steps for Portfolio-Website

1. Run `npm run build` to create static files
   ![Build Process](./images/build.png)
2. Create S3 Bucket for Static Files, enter name and leave everything as default
   ![Bucket Creation](./images/create_bucket.png)
3. Upload Static Files to S3 Bucket
   ![Upload Files](./images/create_bucket.png)
4. Create a Cloudfront Distribution to server static files,select the previously created S3 Bucket
   ![CF Creation 1](./images/cloudfront_1.png)
5. Leave the Viwer Section as Default, No need to change
   ![CF Creation 2](./images/cloudfront_2.png)
6. If Domain is in other registrar, create a public hosted zone and point NS record to the NS AWS provides
   ![DNS 1](./images/hosted_zone.png)
   ![DNS 2](./images/ns_records.png)
7. Create a public Certificate base on your registered domain, in Settings section of Cloudfront Distribution create process
   ![Certificate](./images/certificate.png)
   ![Create Cert](./images/create_cert.png)
8. Select the Cert you created, Add a Custom Domain under your Registered Domain, Set Default Root to `index.html`,Click Create
   ![CF Creation 3](./images/cloudfront_3.png)
9. Go to your S3 Bucket can change the bucket policy, to allow the created Cloudfront Distribution access
   ![Bucket Policy](./images/s3_bucket_policy.png)
