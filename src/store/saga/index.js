import { all } from "redux-saga/effects";
import { getDataActionWatcher } from "./nowShowing";
import { authActionWatcher } from "./auth";

export default function* root() {
	yield all([ getDataActionWatcher(), authActionWatcher() ]);
}