import React from 'react';
import { Routes, Route, } from "react-router-dom";

export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<h1>THome</h1>} />
            <Route path="/invoices" element={<h1>invoices</h1>} />
            <Route path="/expenses" element={<h1>expenses</h1>} />
        </Routes>
    )
}
