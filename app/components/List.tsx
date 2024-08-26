'use client';

import React, { useState } from 'react';

interface RoomData {
    room: string;
    keyowner: string;
    available: boolean;
    open: boolean;
}

const roomData: RoomData[] = [
    { room: 'Sala 1', keyowner: 'John Doe', available: true, open: false },
    { room: 'Atelie', keyowner: 'Jane Smith', available: false, open: true },
    { room: 'Sala 2', keyowner: 'Alice Johnson', available: true, open: true },
    { room: 'Fablab', keyowner: 'Bob Brown', available: false, open: false },
    { room: 'Sala 3', keyowner: 'John Doe', available: true, open: false },
    { room: 'Sala 4', keyowner: 'Jane Smith', available: false, open: true },
    { room: 'Centro Academico', keyowner: 'Alice Johnson', available: true, open: true },
    { room: 'Lab 1', keyowner: 'Bob Brown', available: false, open: false },
    { room: 'Lab 2', keyowner: 'John Doe', available: true, open: false },
    { room: 'Lab 3', keyowner: 'Jane Smith', available: false, open: true },
    { room: 'Lab 4', keyowner: 'Alice Johnson', available: true, open: true },
    { room: 'Lab 5', keyowner: 'Bob Brown', available: false, open: false },
];

function List() {
    const [search, setSearch] = useState<string>('');

    const filteredRooms = roomData.filter((data) =>
        data.room.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <div className="container-fluid mt-3" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <form className="d-flex" role="search">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
            </div>
            <ul className="list-group mt-3">
                {filteredRooms.map((data, index) => (
                    <li className="list-group-item" key={index}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <p className="fs-5 fw-bold">{data.room}</p>
                                <p>atualmente com:</p>
                                <p>{data.keyowner}</p>
                            </div>
                            <div>
                                {data.available ? (
                                    <p className="badge text-bg-success text-wrap">Disponível</p>
                                ) : (
                                    <p className="badge text-bg-danger text-wrap">Indisponível</p>
                                )}
                                {data.open ? (
                                    <p className="badge text-bg-success text-wrap">Aberta</p>
                                ) : (
                                    <p className="badge text-bg-danger text-wrap">Fechada</p>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;