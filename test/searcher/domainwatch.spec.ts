import { expect } from "chai";
import "mocha";
import { DomainWatch } from "../../src/lib/searcher";

describe("DomainWatch", function() {
  const subject = new DomainWatch();

  it("should support Domain & Email type IOC", function() {
    expect(subject.supportedTypes).to.deep.equal(["domain", "email"]);
  });

  describe("#searchByDomain", function() {
    it("should return URL", function() {
      expect(subject.searchByDomain("github.com")).to.equal(
        "https://domainwat.ch/whois/github.com"
      );
    });
  });
  describe("#searchByEmail", function() {
    it("should return URL", function() {
      expect(subject.searchByEmail("test@test.com")).to.equal(
        "https://domainwat.ch/search?query=test%40test.com"
      );
    });
  });
});
