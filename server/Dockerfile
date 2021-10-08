FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . ./

ENV MONGO_URL=mongodb+srv://harsha:harsha@zomato-master.pxabl.mongodb.net/zomato?retryWrites=true&w=majority
ENV GOOGLE_CLIENT_ID=972668072514-63i1e5vnqe5t8muv69vl2o4r14sccnr0.apps.googleusercontent.com
ENV GOOGLE_CLIENT_SECRET=sgA4Wfv7KP1uDF0gqbm1oz_P

ENV AWS_S3_ACCESS_KEY=AKIA3FMQVDAYSFK7VN63
ENV AWS_S3_SECRET_KEY=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

ENV MAILGUN_DOMAIN=sandbox1c413779cd364fb790a3a9cd63096c5a.mailgun.org
ENV MAILGUN_API_KEY=2a442566139473248c382f4c34f1fef2-dbdfb8ff-12696010

ENV RZR_PAY_ID=rzp_test_U9W8ugIz483jvs
ENV RZR_PAY_SECRET=f02tNT0bcLniWRsn1uxEGXkl

CMD ["npm","run","start"]



