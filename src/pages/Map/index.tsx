/* eslint-disable max-len */
import { FC, useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { RestaurantInterfaces } from '../../interfaces';
import RestaurantCard from '../../components/RestaurantCard';

export interface props {
  restaurants?: RestaurantInterfaces[];
}

const Map: FC<props> = ({ restaurants }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantInterfaces | null>(null);
  const [cardPosition, setCardPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (map.current) return;

    mapboxgl.accessToken =
      'pk.eyJ1IjoibWVzaGVrYWgiLCJhIjoiY21nNDE5N2diMTUxNjJtczZ6YmxoMWM2cyJ9.Z-uTLOsSl2jNyx8sB_Rt7Q';

    if (mapContainer?.current) {
      const isDark = document.documentElement?.classList.contains('dark');

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: isDark
          ? 'mapbox://styles/mapbox/dark-v11'
          : 'mapbox://styles/mapbox/streets-v12',
        center: [46.6753, 24.7136],
        zoom: 10,
        attributionControl: false,
      });

      map?.current.on('click', (e) => {
        if (
          !(e?.originalEvent?.target as HTMLElement).closest('.mapboxgl-marker')
        ) {
          setSelectedRestaurant(null);
        }
      });
    }

    return () => {
      if (map?.current) {
        map?.current?.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map.current && restaurants) {
      restaurants?.forEach((restaurant) => {
        if (restaurant?.restaurantLet && restaurant?.restaurantLng) {
          const marker = new mapboxgl.Marker({ color: '#F4CBDF' })
            .setLngLat([
              Number(restaurant.restaurantLng),
              Number(restaurant.restaurantLet),
            ])
            .addTo(map.current!);

          marker.getElement().addEventListener('click', (e) => {
            const rect = mapContainer?.current!.getBoundingClientRect();
            const markerRect = (
              e.target as HTMLElement
            ).getBoundingClientRect();

            setCardPosition({
              x: markerRect?.left - rect?.left,
              y: markerRect?.top - rect?.top,
            });
            setSelectedRestaurant(restaurant);
          });
        }
      });
    }
  }, [restaurants]);

  return (
    <div className='fixed inset-0 z-0'>
      <div ref={mapContainer} className='w-full h-full' />

      {selectedRestaurant && (
        <RestaurantCard
          restaurant={selectedRestaurant}
          position={cardPosition}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </div>
  );
};

export default Map;
