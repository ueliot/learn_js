
import { AdvanceLogsLibrary } from "./AdvancedLogLib.js";
import LogsFacade from "./logsfacade.js";

let logsFacade = new LogsFacade(new AdvanceLogsLibrary());

logsFacade.write("HOLA FELIX");
