"use client";

import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { LinkIcon, Triangle } from "./Icons";

type Books = {
	name: string;
	link: string;
};

export default function Table({ books }: { books: Books[] }) {
	const columns = useMemo<ColumnDef<Books>[]>(
		() => [
			{
				accessorKey: "name",
				id: "name",
				cell: (info) => (
					<span className=" font-medium">
						{info.getValue() as string}
					</span>
				),
				header: () => <span>Name</span>,
				sortUndefined: "last",
			},
			{
				accessorKey: "link",
				id: "link",
				cell: (info) => (
					<a
						href={`${info.getValue()}`}
						target="_blank"
						className=" text-blue-600 font-medium flex flex-row gap-1 items-center"
					>
						<LinkIcon />
						<span>Link</span>
					</a>
				),
				header: () => <span>Action</span>,
				sortUndefined: "last",
			},
		],
		[],
	);

	const reactTable = useReactTable({
		columns: columns,
		data: books,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		enableSortingRemoval: false,
	});

	return (
		<div className="mt-2">
			<table
				className="grid border overflow-auto rounded-md relative font-montesrrat"
				style={{
					gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
				}}
			>
				<thead className="contents">
					{reactTable.getHeaderGroups().map((headerGrp) => (
						<tr key={headerGrp.id} className="contents">
							{headerGrp.headers.map((header) => (
								<th
									key={header.id}
									onClick={header.column.getToggleSortingHandler()}
									className=" flex flex-row items-center gap-1 cursor-pointer select-none text-nowrap py-3 px-2 bg-blue-100 text-black border-b text-left"
								>
									{flexRender(
										header.column.columnDef.header,
										header.getContext(),
									)}
									<span
										className={`${header.column.getNextSortingOrder() === "asc" ? "" : "rotate-180"}`}
									>
										<Triangle />
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody className="contents">
					{reactTable.getRowModel().rows.map((row) => (
						<tr key={row.id} className="contents group">
							{row.getVisibleCells().map((cell) => (
								<td
									key={cell.id}
									className=" group-hover:bg-gray-100 text-nowrap py-2 px-2 border-b bg-white text-black"
								>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
