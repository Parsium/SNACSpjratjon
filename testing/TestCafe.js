import { selector } from "testcafe";
import SnacsHome from "./TestCafe-Page";

const page = new SnacsHome();

fixture`snacs`.page`http://localhost:3000`;
