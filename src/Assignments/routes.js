import * as dao from "./dao.js";
export default function AssignmentRoutes(app) {
    const createAssignment = async (req, res) => {
        const assignment = await dao.createAssignment(req.body);
        res.json(assignment);
    };
    const deleteAssignment = async (req, res) => {
        const status = await dao.deleteAssignment(req.params.assignmentId);
        res.json(status);
    };
    const findAllAssignments = async (req, res) => {
        const assignments = await dao.findAllAssignments();
        res.json(assignments);
    };
    const findAssignmentById = async (req, res) => {
        const assignment = await dao.findAssignmentById(req.params.assignmentId);
        res.json(assignment);
    };
    const updateAssignment = async (req, res) => {
        const { assignmentId } = req.params;
        try {
            const status = await dao.updateAssignment(assignmentId, req.body);
            res.json(status);
        } catch (err) {
            res.json(err);
        }
    };

    app.get("/api/courses/:cid/assignments", async (req, res) => {
        const { cid } = req.params;
        const assignments = (await dao.findAllAssignments())
            .filter((a) => a.course === cid);
        res.send(assignments);
    });

    app.post("/api/assignments", createAssignment);
    app.get("/api/assignments", findAllAssignments);
    app.get("/api/assignments/:assignmentId", findAssignmentById);
    app.put("/api/assignments/:assignmentId", updateAssignment);
    app.delete("/api/assignments/:assignmentId", deleteAssignment);
}
