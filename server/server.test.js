import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from './server';

chai.use(chaiHttp);
chai.should();

describe('/categories', () => {
  it('should get categories', (done) => {
    chai
      .request(app)
      .get(`/categories`)
      .end((rej, res) => {
        res.should.have.status(200);
        res.body.should.be.a('Array');
        done();
      });
  });
});
