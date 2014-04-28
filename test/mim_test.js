var should   = require('chai').should(),
    expect   = require('chai').expect,
    MIM      = require('../mim');

describe('MIM', function() {
  describe('#getMIMEType()', function() {
    it('returns MIME type for given extension', function() {
      MIM.getMIMEType('video.avi').should.eq('video/x-msvideo');
    });

    context('when MIME type is not found', function() {
      it('returns null', function() {
        expect(MIM.getMIMEType('nonexistent')).to.eq(null);
      });
    });

    context('works with', function() {
      it('cyrillic in filename', function() {
        MIM.getMIMEType('фильм.avi').should.eq('video/x-msvideo');
      });

      it('uppercase letters', function() {
        MIM.getMIMEType('IMG_0110.JPG').should.eq('image/jpeg');
      });
    });

    context('accepts', function() {
      it('extension', function() {
        MIM.getMIMEType('mkv').should.eq('video/x-matroska');
        MIM.getMIMEType('.jpeg').should.eq('image/jpeg');
      });

      it('fullname', function() {
        MIM.getMIMEType('long_file-name.ecma').should.eq('application/ecmascript');
      });

      it('absolute path', function() {
        MIM.getMIMEType('/etc/default/whatever.mif').should.eq('application/vnd.mif');
        MIM.getMIMEType('/folder with spaces/and file with space.xspf').should.eq('application/xspf+xml');
      });

      it('relative path', function() {
        MIM.getMIMEType('../../discobolos.xyz').should.eq('chemical/x-xyz');
      });

      it('URL', function() {
        MIM.getMIMEType('https://mediapeers.com/products/12.json').should.eq('application/json');
        MIM.getMIMEType('https://s3.amazonaws.com/mpx-ah-ftp/archive_2.zip').should.eq('application/zip');

        /*jshint multistr: true */
        var s3SignedURL = "https://s3.amazonaws.com/mpx%20ah-ftp/photos.rar?AWSAccessKeyId=ASIAIZQPFRWZ4FH5S3WA&\
          Expires=1382431446&Signature=n9Kj4K1aqLECw5QP0W1v64xxods%3D&x-amz-security-token=AQoDYXdzENL///\
          ///////wEa0AJQ4H%2Bpgl1/aj5MMQ0DsOXd%2BMHxy9yyt/NdR5RDIPuivurCSD2hc3TLF0M%2BDsn3VHxMvhLE9zN29yE\
          aJG5nPWPi8%2BvRzsJiyaihGiTWhz3oMnlc%2B1uP7HrVxEaTfILhZvQlKNqdxARcRmwa/3IWGegesqZdeWgMLPcOX4dU8IZ\
          XHsfq1JbS1YgpUSYPhSX%2BiQ2KESYeZZsygkyUDVZeEv4tIlTdysPe4gngZoaJp0tPLxrWgqGKU3udTQHVvM23fRfvKN%2B\
          KhFjJKUaESx/3rbJTINTL8%2BDGH7AcN103NnmP5f5JN8W%2BCuyD97Dp/kXcqxakD6vd33DuKF6aH2mI23mbm45jTL6DYDp\
          aM/dMaaS8KEG88AmiBXISttrlMFdFEjlmX5nxOAeE6AVSoQTlsCWFdDcFTT8R/9xou%2BvfrfdTG4HbhXBq7V/Jr3jKi/8Hy\
          gog7fKYkwU%3D";

        MIM.getMIMEType(s3SignedURL).should.eq('application/x-rar-compressed');
      });
    });

    context('when second argument is given', function() {
      context('and MIME type was not found', function() {
        it('returns it as default', function() {
          var MIMEType = 'video/x-sgi-movie';

          MIM.getMIMEType('nonexistent', MIMEType).should.eq(MIMEType);
        });
      });
    });
  });
});
