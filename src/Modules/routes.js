import * as dao from "./dao.js";
export default function ModulesRoutes(app) {
    app.get("/api/courses/:cid/modules", async (req, res) => {
        const { cid } = req.params;
        const modules = (await dao.findAllModules()).filter((a) => a.course === cid);
        res.send(modules);
    });
    app.post("/api/courses/:cid/modules", async (req, res) => {
        req.body._id = (Math.random() + 1).toString(36).substring(7);
        req.body.course = req.params.cid;
        const module = await dao.createModule(req.body);
        res.json(module);
    });
    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        try {
            const status = await dao.updateModule(moduleId, req.body);
            res.json(status);
        } catch (err) {
            res.json(err);
        }
    });
    app.delete("/api/modules/:moduleId", async (req, res) => {
        const status = await dao.deleteModule(req.params.moduleId);
        res.json(status);
    });
}
