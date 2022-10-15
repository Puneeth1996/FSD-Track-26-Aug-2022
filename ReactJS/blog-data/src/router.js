import React from 'react';
import { Routes, Route } from "react-router-dom";
import Expense from './Component/expense.jsx';
import Invoice from './Component/invoice';
import Post from './Component/Post';
import SinglePostDetail from './Container/SinglePostDetail'

export default function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Post /> } />
            <Route exact path="/post/:id" element={<SinglePostDetail /> } />
            <Route path="/invoices" element={<Expense />} />
            <Route path="/expenses" element={<Invoice />} />
        </Routes>
    )
}
