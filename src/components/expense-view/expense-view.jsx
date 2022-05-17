import { Stack } from "react-bootstrap";
import ExpenseForm from "./expense-form";
import ExpenseTable from "./expense-table";

const ExpenseView = () => {
    return (
        <Stack gap={3} className="col-md-6">
            <ExpenseForm />
            <ExpenseTable />
        </Stack>
    );
}
 
export default ExpenseView;