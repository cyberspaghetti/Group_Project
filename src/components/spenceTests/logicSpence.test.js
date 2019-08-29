import {
  logout,
  createPost,
  getPost,
  friendRequests,
  getServerName
} from "./logicSpence";

describe("testing logout function", () => {
  it("this should be a function", () => {
    expect(typeof logout).toBe("function");
  });
});
describe("testing createPost function", () => {
  it("this should be a function", () => {
    expect(typeof createPost).toBe("function");
  });
});
describe("testing getPost function", () => {
  it("this should be a function", () => {
    expect(typeof getPost).toBe("function");
  });
});
describe("testing friendRequests function", () => {
  it("this should be a function", () => {
    expect(typeof friendRequests).toBe("function");
  });
});
describe("testing getServerName function", () => {
  it("this should be a function", () => {
    expect(typeof getServerName).toBe("function");
  });
});
