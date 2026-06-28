export default function requireAdmin(req, res, next) {
  if (!req.user) {
    return res.status(401).send("Unauthorized");
  }

  next();
}