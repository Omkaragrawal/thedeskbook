var should = require("should");
var supertest = require("supertest");
var server = supertest.agent("http://localhost:3000")

describe("TheDesbook API testing",function(){
  it("Should do register",function(done){
      server
      .post("/register")
      .send({user_email : 'shahid@codeforgeek.com', user_password : 'shahid',user_name : "Shahid"})
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err,res){
        if(!err) {
          res.body.error.should.not.equal(true);
          done();
        }
      });
  });

  it('should return correct login',function(done){
      server
        .post('/login')
        .send({user_email : 'rwtc66@gmail.com', user_password : 'shahid'})
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err,res){
          res.body.error.should.equal(false);
          done();
        });
  });

  it('should return incorrect login',function(done){
      server
        .post('/login')
        .send({user_email : 'shahid@abc.com', user_password : 'abc'})
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err,res){
          res.body.error.should.not.equal(false);
          done();
        });
  });

  it('should add status',function(done){
      server
      .post('/addStatus')
      .send({path : '/1/mydesk.png',fileSize : '200KB',fileName : "myDesk",fileTitle : "Here is my Cool desk",shareType : "PUBLIC"})
      .expect('Content-Type',/json/)
      .expect(200)
      .end(function(err,res){
        res.body.error.should.equal(false);
        done();
      });
  });

  it('should return status',function(done){
      server
      .get('/fetchStatus')
      .expect('Content-Type',/json/)
      .expect(302)
      .end(function(err,res){
          res.body.error.should.equal(false);
          res.body.message.should.be.type('object');
          done();
      });
  });

  it('should logout',function(done){
    server
    .get('/logout')
    .expect(302)
    .end(function(err,res){
      res.status.should.equal(302);
    });
  })

});
